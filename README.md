# Como replicar no seu ambiente

## Preparando seu ambiente local 
   ### Instalar Node.js
   * node -v - verifica se o Node.js está instalado
   * sudo apt update / sudo apt instal nodejs npm -y - se não estiver instalado, instale pelo site oficial ou pelo gerenciador de pacotes
   ### Instalar Git
   * git --version - verifica se o Git está instalado
   * sudo apt install git -y - Faz a instalação do Git
   ### Clonar o repositório
   * git clone https://github.com/dnxpollo/logicaDIO.git
   * cd logicaDIO - ir para pasta clonada
   ### Inicializar projeto Node.js
   * npm init -y  -inicializar dentro da pasta do projeto
   * node nomeArquivo.js -trocar nomeArquivo pelo nome do seu arquivo
   ### Como contribuir?
   #### Fork e Pull Request
   * Faça um fork do repositório(no canto superior direito do GitHub)
   * Clone seu fork para o ambiente local
      * git clone https://github.com/dnxpollo/logicaDIO.git
   * crie uma nova branch para alterações 
      * git checkout -b minhaBranch
   * faça as mudanças e commit
      * git add .
      * git commit -m "mensagem do que está sendo commitado"
   * envie para seu fork
      * git push origin minhaBranch
### Objetivo
   * Usar a programação e os cursos da DIO para me ajudar a encontrar oportunidades de emprego.
   * Facilitar processos repetitivos
### Ferramentas usadas
* VSCode
* MarkdownlinePreview
* Node.js
* Git/GitHub
* Linux

## Desafios
   * [Desáfio Classificador de nível de herói](https://github.com/dnxpollo/logicaDIO/tree/master/DesafioClassificadorNivelHeroi)
* [Desáfio Calculadora de Partidas Ranqueadas](https://github.com/dnxpollo/logicaDIO/tree/master/DesafioCalculadoraPartidasRanqueadas)

--------------------------------------------------------------------------
# How to replicate in your environment

## Preparing your local environment
### Install Node.js
   * node -v – check if Node.js is installed
   * sudo apt update / sudo apt install nodejs npm -y – if not installed, get it from the official site or via package manager

### Install Git
   * git --version – check if Git is installed
   * sudo apt install git -y – install Git if necessary

### Clone the repository
   * git clone https://github.com/dnxpollo/logicaDIO.git
   * cd logicaDIO – navigate into the cloned folder

### Initialize Node.js project
   * npm init -y – initialize inside the project folder
   * node fileName.js – replace fileName with the name of your file to run it

### How to contribute
#### Fork and Pull Request
   * Fork the repository (top right corner on GitHub)
   * Clone your fork to the local environment
      * git clone https://github.com/yourUser/logicaDIO.git
   * Create a new branch for your changes
      * git checkout -b myBranch
   * Make changes and commit
      * git add .
      * git commit -m "message describing the commit"

   * Push to your fork
      * git push origin myBranch

### Objective
* Use programming and DIO courses to help me find job opportunities

* Automate repetitive processes

### Tools used
* VSCode

* Markdown Preview

* Node.js

* Git/GitHub

* Linux

### Challenges

   * [Hero Level Classifier Challenge](https://github.com/dnxpollo/logicaDIO/tree/master/DesafioClassificadorNivelHeroi)
* [Ranked Matches Calculator Challenge](https://github.com/dnxpollo/logicaDIO/tree/master/DesafioCalculadoraPartidasRanqueadas)
