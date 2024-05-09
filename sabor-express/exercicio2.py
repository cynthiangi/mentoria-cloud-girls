numero_escolhido = int(input('Insira um número: '))

if numero_escolhido%2 == 0:
    print(f'O número {numero_escolhido} é par')
else:
    print(f'O número {numero_escolhido} é impar')

idade_usuario = int(input('Qual sua idade? '))

if 0 <= idade_usuario <= 12:
    print(f'Você é uma criança de {idade_usuario} anos')
elif 13 <= idade_usuario <= 18:
    print(f'Você é um adolecente de {idade_usuario} anos')
else:
    print(f'Você é um adulto de {idade_usuario} anos')

nome = input('Digite seu nome: ')
senha = input('Digite sua senha: ')

nome_usuario = 'Cynthia'
senha_usuario = 'pimenta'

if nome != nome_usuario or senha != senha_usuario:
    print('Acesso negado')
else:
    print('Bem vindo')

coordenada_x = int(input('Digite a coordenada X: '))
coordenada_y = int(input('Digite a coordenada Y: '))

if coordenada_x > 0 and coordenada_y > 0:
    print('Seu ponto está no primeiro quadrante')
elif coordenada_x < 0 and coordenada_y > 0:
    print('Seu ponto está no segundo quadrante')
elif coordenada_x < 0 and coordenada_y < 0:
    print('Seu ponto está no terceiro quadrante')
elif coordenada_x > 0 and coordenada_y < 0:
    print('Seu ponto está no quarto quadrante')
else:
    print('Seu ponto está no no eixo ou origem')