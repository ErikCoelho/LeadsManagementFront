@echo off
echo 🎨 Lead Management - Front-end
echo =============================

echo 📋 Verificando pré-requisitos...
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker não encontrado. Instale o Docker Desktop primeiro.
    pause
    exit /b 1
)

echo ✅ Docker encontrado!
echo.

REM Configurar URL da API
if "%API_URL%"=="" set API_URL=http://localhost:5000
echo 🔗 API configurada: %API_URL%

echo 🧪 Testando conexão com API...
curl -s "%API_URL%/health" >nul 2>&1
if %errorlevel%==0 (
    echo ✅ API encontrada e funcionando!
) else (
    echo ⚠️  API não encontrada em %API_URL%
    echo    Certifique-se de que o back-end está rodando primeiro.
    echo.
    echo 💡 Para iniciar o back-end ^(se em repositório separado^):
    echo    cd [pasta-do-backend] ^&^& docker-compose up -d
    echo    ou execute: start-backend.bat
    echo.
    choice /C YN /M "Continuar mesmo assim? (Y/N)"
    if errorlevel 2 exit /b 1
)

echo.
echo 🛑 Parando containers anteriores...
docker-compose down >nul 2>&1

echo.
echo 🐳 Construindo e iniciando Front-end...
docker-compose build --no-cache
docker-compose up -d

echo.
echo ✅ Front-end iniciado com sucesso!
echo.
echo 🌐 Acessos disponíveis:
echo   Frontend: http://localhost:4200
echo   API:      %API_URL%
echo.
echo 📊 Para monitorar:
echo   docker-compose logs -f
echo   docker-compose ps
echo.
echo 🛑 Para parar:
echo   docker-compose down
echo.
pause 