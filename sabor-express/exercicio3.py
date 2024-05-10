numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
nomes = ['Arthur', 'Aurora', 'Alice', 'Anthony']
anos = [1990, 2024]

for nome in nomes:
    print(f'.{nome}')
print()

soma = 0
for impar in numeros:
    if impar % 2 != 0:
        soma = soma + impar
print(soma)
print()

for i in range (10, 0, -1):
    print(i)

tabuada = []
numero_escolhido = int(input('\nDigite um numero: '))
for numero in numeros:
    multiplicacao = numero_escolhido * numero
    tabuada.append(multiplicacao)

for unidade in tabuada:
    print(f'.{unidade}\n')

adicao = 0
try:
    for numero in numeros:
        adicao += numero
    print(adicao)
except Exception as e:
    print(f'Ocorreu um erro: {e}')

print()

media = 0
try:
    for ano in anos:
        media = (media + ano)
    
    media = media / len(anos)

    print(media)
except Exception as e:
    print(f'Ocorreu um erro: {e}')

