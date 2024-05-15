from modelos.avaliacao import Avaliacao
from modelos.cardapio.item_cardapio import ItemCardapio

class Restaurante:
    restaurantes = []
# os 'dunder methods' são metodos especiais de uma classe
    def __init__(self, nome, categoria):
        self._nome = nome.title()
        self._categoria = categoria.upper()
        self._ativo = False # define um atributo privado
        self._avaliacao = []
        self._cardapio = []
        Restaurante.restaurantes.append(self)

    def __str__(self):
        return f'{self._nome} | {self._categoria}'
    
    @classmethod
    def listar_restaurantes(cls):
        print(f'{'Nome do Restaurante'.ljust(25)} | {'Categoria do Restaurante'.ljust(25)} | {'Avaliação'.ljust(25)} | Status do Restaurante')
        for restaurante in cls.restaurantes:
            print(f'{restaurante._nome.ljust(25)} | {restaurante._categoria.ljust(25)} | {str(restaurante.media_avaliacoes).ljust(25)} | {restaurante.ativo}')
    
    @property
    def ativo(self):
        return '✔️' if self._ativo else '❌'
    
    def alternar_estado(self):
        self._ativo = not self._ativo

    def receber_avaliacao(self, cliente, nota):
        if 0 <= nota <= 5:
            avaliacao = Avaliacao(cliente, nota)
            self._avaliacao.append(avaliacao)

    @property
    def media_avaliacoes(self):
        if not self._avaliacao:
            return 'Novo!'
        soma_das_notas = sum(avaliacao._nota for avaliacao in self._avaliacao)
        quantidade_de_notas = len(self._avaliacao)
        media = round(soma_das_notas / quantidade_de_notas, 1)
        return media
    
    def adicionar_no_cardapio(self, item):
        if isinstance(item, ItemCardapio):
            self._cardapio.append(item)

    @property
    def exibir_cardapio(self):
        print(f'Cardápio do Restaurante {self._nome}\n')
        for i,item in enumerate(self._cardapio, start=1):
            if hasattr(item, 'descricao'):
                mensagem_prato = f'{i}. Nome: {item._nome} | Preço: R${item._preco} | Descrição: {item.descricao}'
                print(mensagem_prato) 
            else:
                mensagem_bebida = f'{i}. Nome: {item._nome} | Preço: R${item._preco} | Tamanho: {item.tamanho}'
                print(mensagem_bebida)



# restaurante_praca = Restaurante('praça', 'Gourmet')
# acessando os atributos do objeto (que foram determinados na classe)
# restaurante_praca.nome = 'Bistrô'
# restaurante_praca.categoria = 'Italiana'
# restaurante_praca.alternar_estado()
# restaurante_pizza = Restaurante('pizza express', 'Fast Food')


# 'vars' acessa os atributos do objeto; 'dir' acessa todos métodos e atributos daquele objeto
# print(restaurante_praca)
# print(restaurante_pizza)

# Restaurante.listar_restaurantes()