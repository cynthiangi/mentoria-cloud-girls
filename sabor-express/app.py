# Importando uma biblioteca de funções pre-definidas
import os

# O comando print apenas exibe uma informação. Para pular linha usamos o "\n"
def exibir_nome_do_app():
    print('''
        
    ██████████████████████████████████████████████████████████████████████████
    █─▄▄▄▄██▀▄─██▄─▄─▀█─▄▄─█▄─▄▄▀███▄─▄▄─█▄─▀─▄█▄─▄▄─█▄─▄▄▀█▄─▄▄─█─▄▄▄▄█─▄▄▄▄█
    █▄▄▄▄─██─▀─███─▄─▀█─██─██─▄─▄████─▄█▀██▀─▀███─▄▄▄██─▄─▄██─▄█▀█▄▄▄▄─█▄▄▄▄─█
    ▀▄▄▄▄▄▀▄▄▀▄▄▀▄▄▄▄▀▀▄▄▄▄▀▄▄▀▄▄▀▀▀▄▄▄▄▄▀▄▄█▄▄▀▄▄▄▀▀▀▄▄▀▄▄▀▄▄▄▄▄▀▄▄▄▄▄▀▄▄▄▄▄▀
        ''')
def exibir_opcoes():
    print('1. Cadastrar Restaurante')
    print('2. Listar Restaurantes')
    print('3. Ativar Restaurante')
    print('4. Sair\n')

def finalizar_app():
    # essa função do OS limpa a tela onde está o programa
    os.system('cls') 
    print('Encerrando o programa\n')

def escolher_opcao():
    # o input retorna sempre uma string, caso precisamos de um inteiro, usamos a função 'int()'
    opcao_escolhida = int(input('Escolha uma opção: ')) # variaveis são declaradas por snake_case; o input pega uma informação do usuário
    # print('Você escolheu a opção', opcao_escolhida)
    # print(f'Você escolheu a opção {opcao_escolhida}') essa formatação faz interpolação de string com variaveis e outras informações

    if opcao_escolhida == 1:
        print('Cadastrar Restaurante')
    elif opcao_escolhida == 2:
        print('Listar Restaurantes')
    elif opcao_escolhida == 3:
        print('Ativar Restaurante')
    else:
        finalizar_app()

def main():
    exibir_nome_do_app()
    exibir_opcoes()
    escolher_opcao()

# Essa forma sinaliza que o arquivo é o arquivo principal do programa, para não ser importado como com o OS
if __name__ == '__main__':
    main()