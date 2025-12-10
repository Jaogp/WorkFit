# 🏋️ WorkFit

> **Bem-estar corporativo gamificado.** Incentive pausas ativas e saúde no ambiente de trabalho através de tecnologia.

![Status do Projeto](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow)
![Tech Mobile](https://img.shields.io/badge/Mobile-React_Native-blue)
![Tech Backend](https://img.shields.io/badge/Backend-Django-green)

## 📄 Sobre o Projeto

O **WorkFit** é uma aplicação multiplataforma (Mobile e Web) projetada para combater o sedentarismo no ambiente corporativo. Através de um sistema de **gamificação**, os colaboradores são incentivados a realizar exercícios rápidos, alongamentos e pausas ativas, acumulando pontos e subindo em um ranking geral da empresa.

### 🎯 Principais Funcionalidades

* **Treinos Guiados:** Catálogo de exercícios com instruções detalhadas, imagens/mídia e cronômetro integrado.
* **Gamificação:** Sistema de pontuação (XP) e Ranking com pódio para os usuários mais ativos.
* **Perfil do Usuário:** Gestão de conta, avatar e histórico de atividades.
* **Multiplataforma:** Acessível via Android, iOS e Navegador Web.

---

## 📸 Screenshots

| Home | Detalhes do Treino | Execução | Ranking |
|:---:|:---:|:---:|:---:|
| *(Coloque aqui um print da Home)* | *(Coloque aqui um print dos Detalhes)* | *(Coloque aqui um print do Cronômetro)* | *(Coloque aqui um print do Ranking)* |

---

## 🛠️ Tecnologias Utilizadas

### Frontend (Mobile & Web)
* **React Native** (com Expo Framework)
* **React Navigation** (Abas e Stack)
* **Context API** (Gerenciamento de Estado)
* **Expo Vector Icons** & **Google Fonts** (Poppins)

### Backend (API)
* **Python 3**
* **Django** & **Django REST Framework**
* **SQLite** (Banco de dados de desenvolvimento)

---

## 📂 Estrutura do Projeto

O repositório está organizado em dois módulos principais:

* `/workfit-app`: Código fonte do aplicativo (Frontend).
* `/workfit-backend`: Código fonte da API e banco de dados (Backend).
* `/docs`: Documentação detalhada de requisitos e arquitetura.

👉 **[Leia a Documentação Completa aqui](./docs/REQUISITOS.md)**

---

## 🚀 Como Executar o Projeto

Para rodar o projeto completo, você precisará de dois terminais abertos: um para o servidor (Backend) e outro para o aplicativo (Frontend).

### Pré-requisitos
* Node.js instalado
* Python instalado
* Expo Go (no celular) ou Emulador

### Passo 1: Configurar o Backend (Django)

```bash
# Entre na pasta do backend
cd workfit-backend

# Crie e ative o ambiente virtual (Windows)
python -m venv venv
.\venv\Scripts\activate

# Instale as dependências
pip install django djangorestframework django-cors-headers

# Execute as migrações do banco
python manage.py migrate

# Inicie o servidor
python manage.py runserver
