from modelos.restaurante import Restaurante
from modelos.cardapio.bebida import Bebida
from modelos.cardapio.prato import Prato

restaurante_praca = Restaurante('Praça', 'Gourmet')
restaurante_mexicano = Restaurante('Mexican Food', 'mexicana')
restaurante_japones = Restaurante('japa', 'Japonesa')
bebida_suco = Bebida('Suco de Melancia', 5.00, 'grande')
bebida_suco.aplicar_desconto()
prato_paozinho = Prato('Pãozinho', 2.00, 'O melhor Pão da Cidade')
prato_paozinho.aplicar_desconto()
restaurante_praca.adicionar_no_cardapio(bebida_suco)
restaurante_praca.adicionar_no_cardapio(prato_paozinho)

def main():
    restaurante_praca.exibir_cardapio

if __name__ == '__main__':
    main()