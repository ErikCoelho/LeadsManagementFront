#!/bin/bash

echo "🎨 Lead Management - Front-end"
echo "============================="

echo "📋 Verificando pré-requisitos..."
if ! command -v docker &> /dev/null; then
    echo "❌ Docker não encontrado. Instale o Docker primeiro."
    exit 1
fi

echo "✅ Docker encontrado!"
echo

# Configurar URL da API
if [ -z "$API_URL" ]; then
    API_URL="http://localhost:5000"
fi
echo "🔗 API configurada: $API_URL"

echo "🧪 Testando conexão com API..."
if curl -s "$API_URL/health" > /dev/null 2>&1; then
    echo "✅ API encontrada e funcionando!"
else
    echo "⚠️  API não encontrada em $API_URL"
    echo "   Certifique-se de que o back-end está rodando primeiro."
    echo
    echo "💡 Para iniciar o back-end (se em repositório separado):"
    echo "   cd [pasta-do-backend] && docker-compose up -d"
    echo "   ou execute: ./start-backend.sh"
    echo
    read -p "Continuar mesmo assim? (y/N): " choice
    if [[ ! "$choice" =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo
echo "🛑 Parando containers anteriores..."
docker-compose down > /dev/null 2>&1

echo
echo "🐳 Construindo e iniciando Front-end..."
docker-compose build --no-cache
docker-compose up -d

echo
echo "✅ Front-end iniciado com sucesso!"
echo
echo "🌐 Acessos disponíveis:"
echo "  Frontend: http://localhost:4200"
echo "  API:      $API_URL"
echo
echo "📊 Para monitorar:"
echo "  docker-compose logs -f"
echo "  docker-compose ps"
echo
echo "🛑 Para parar:"
echo "  docker-compose down" 