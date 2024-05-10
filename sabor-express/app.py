# Importando uma biblioteca de funções pre-definidas
import os

restaurantes = [{'nome':'Burguinho', 'categoria':'lanches', 'ativo': False}, {'nome':'Massa Gostosa', 'categoria':'italiana', 'ativo': True}, {'nome':'Peixinho', 'categoria':'japonesa', 'ativo': False}]

# O comando print apenas exibe uma informação. Para pular linha usamos o "\n"
def exibir_nome_do_app():
    '''Essa função é responsãvel por exibir o nome do app'''
    print('''
        
    ██████████████████████████████████████████████████████████████████████████
    █─▄▄▄▄██▀▄─██▄─▄─▀█─▄▄─█▄─▄▄▀███▄─▄▄─█▄─▀─▄█▄─▄▄─█▄─▄▄▀█▄─▄▄─█─▄▄▄▄█─▄▄▄▄█
    █▄▄▄▄─██─▀─███─▄─▀█─██─██─▄─▄████─▄█▀██▀─▀███─▄▄▄██─▄─▄██─▄█▀█▄▄▄▄─█▄▄▄▄─█
    ▀▄▄▄▄▄▀▄▄▀▄▄▀▄▄▄▄▀▀▄▄▄▄▀▄▄▀▄▄▀▀▀▄▄▄▄▄▀▄▄█▄▄▀▄▄▄▀▀▀▄▄▀▄▄▀▄▄▄▄▄▀▄▄▄▄▄▀▄▄▄▄▄▀
        ''')
def exibir_opcoes():
    '''Essa função é responsável por exibir o menu de opções'''
    print('1. Cadastrar Restaurante')
    print('2. Listar Restaurantes')
    print('3. Alterar Estado Restaurante')
    print('4. Sair\n')

def finalizar_app():
    '''Essa função é responsável por encerrar o programa'''
    exibir_subtitulo('Encerrando o app.')

def voltar_ao_menu_principal():
    '''Essa função é responsável por retornar o programa para o menu principal'''
    input('\nPressione ENTER para retornar ao menu principal ')
    main()

def opcao_invalida():
    '''Essa função é responsável por nos retornar a mensagem de que a opção escolhida é inválida'''
    print('Opção inválida!\n')
    voltar_ao_menu_principal()

def exibir_subtitulo(texto):
    '''Essa função é responsável por apresentar o título da opção escolhida pelo usuário'''
    os.system('cls')
    linha = '*' * len(texto)
    print(linha)
    print(texto)
    print(linha)
    print()

def cadastrar_novo_restaurante():
    '''Essa função é responsável por cadastrar um novo restaurante
    - Nome do restaurante
    - Categoria

    Output:
    - Adiciona um novo restaurante à lista de restaurantes
    '''
    exibir_subtitulo('Cadastro de novos restaurantes.')
    nome_do_restaurante = input('Digite o nome do restaurante que deseja cadastrar: \n')
    categoria = input(f'Digite a categoria do restaurante {nome_do_restaurante}: \n')
    dados_do_restaurante = {'nome':nome_do_restaurante, 'categoria':categoria, 'ativo': False}
    restaurantes.append(dados_do_restaurante)
    print(f'O restaurante {nome_do_restaurante} foi cadastrado com sucesso!\n')
    voltar_ao_menu_principal()

def listar_restaurante():
    '''Essa função é responsável por listar os restaurantes cadastrados'''
    exibir_subtitulo('Listando os restaurantes.')
    print(f'{'Nome do Restaurante'.ljust(22)} | {'Categoria'.ljust(20)} | {'Status'}')
    for restaurante in restaurantes:
        nome_restaurante = restaurante['nome']
        categoria_restaurante = restaurante['categoria']
        ativo = 'ativado' if restaurante['ativo'] else 'desativado'
        print(f'- {nome_restaurante.ljust(20)} | {categoria_restaurante.ljust(20)} | {ativo}')

    voltar_ao_menu_principal()

def alterar_estado_restaurante():
    '''Essa função é responsável por alterar o status de um restaurante'''
    exibir_subtitulo('Alterando estado do Restaurante')
    nome_restaurante = input('Digite o nome do restaurante que deseja alterar o estado: ')
    restaurante_encontrado = False

    for restaurante in restaurantes:
        if nome_restaurante == restaurante['nome']:
            restaurante_encontrado = True
            restaurante['ativo'] = not restaurante['ativo']
            mensagem = f'o Restaurante {nome_restaurante} foi ativado com sucesso!' if restaurante['ativo'] else f'O Restaurante {nome_restaurante} foi desativado com sucesso!'
            print(mensagem)
    if not restaurante_encontrado:
        print('O restaurante não foi encontrado!') 
    voltar_ao_menu_principal()

def escolher_opcao():
    '''Essa função é responsável por permitir a escolha de algum dos item apresentados na lista'''
    try:
        # o input retorna sempre uma string, caso precisamos de um inteiro, usamos a função 'int()'
        opcao_escolhida = int(input('Escolha uma opção: ')) # variaveis são declaradas por snake_case; o input pega uma informação do usuário
        # print('Você escolheu a opção', opcao_escolhida)
        # print(f'Você escolheu a opção {opcao_escolhida}') essa formatação faz interpolação de string com variaveis e outras informações

        if opcao_escolhida == 1:
            cadastrar_novo_restaurante()
        elif opcao_escolhida == 2:
            listar_restaurante()
        elif opcao_escolhida == 3:
            alterar_estado_restaurante()
        elif opcao_escolhida == 4:
            finalizar_app()
        else:
            opcao_invalida()
    except: 
        opcao_invalida()

def main():
    '''Função principal que inicia o programa'''
    os.system('cls')
    exibir_nome_do_app()
    exibir_opcoes()
    escolher_opcao()

# Essa forma sinaliza que o arquivo é o arquivo principal do programa, para não ser importado como com o OS
if __name__ == '__main__':
    main()