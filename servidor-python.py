#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Servidor Python para Kondar
Servidor HTTP simples para servir arquivos estáticos
"""

import http.server
import socketserver
import os
import sys
import webbrowser
from pathlib import Path

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory="dist", **kwargs)
    
    def end_headers(self):
        # Adicionar headers CORS para desenvolvimento
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()
    
    def log_message(self, format, *args):
        # Log personalizado
        print(f"[{self.log_date_time_string()}] {format % args}")

def main():
    PORT = 8080
    
    print("=" * 50)
    print("    SERVIDOR PYTHON KONDAR")
    print("=" * 50)
    print()
    
    # Verificar se a pasta dist existe
    if not os.path.exists("dist"):
        print("❌ Pasta 'dist' não encontrada!")
        print("Execute primeiro: build-producao.bat")
        input("Pressione Enter para sair...")
        return
    
    print("✅ Pasta dist encontrada!")
    print()
    
    # Verificar se há arquivos na pasta dist
    dist_files = list(Path("dist").glob("*"))
    if not dist_files:
        print("❌ Pasta dist está vazia!")
        print("Execute primeiro: build-producao.bat")
        input("Pressione Enter para sair...")
        return
    
    print("✅ Arquivos encontrados na pasta dist!")
    print()
    
    try:
        # Criar servidor
        with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
            print(f"🚀 Servidor iniciado!")
            print(f"📍 URL: http://localhost:{PORT}")
            print(f"📁 Servindo arquivos de: {os.path.abspath('dist')}")
            print()
            print("⏹️  Pressione Ctrl+C para parar")
            print("=" * 50)
            print()
            
            # Abrir navegador automaticamente
            try:
                webbrowser.open(f"http://localhost:{PORT}")
                print("🌐 Navegador aberto automaticamente!")
                print()
            except:
                print("⚠️  Não foi possível abrir o navegador automaticamente")
                print()
            
            # Iniciar servidor
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n🛑 Servidor parado pelo usuário.")
    except OSError as e:
        if e.errno == 10048:  # Porta já em uso
            print(f"❌ Porta {PORT} já está em uso!")
            print("Tente fechar outros servidores ou use uma porta diferente.")
        else:
            print(f"❌ Erro ao iniciar servidor: {e}")
    except Exception as e:
        print(f"❌ Erro inesperado: {e}")
    
    input("Pressione Enter para sair...")

if __name__ == "__main__":
    main()


