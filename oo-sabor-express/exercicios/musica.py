class Musica:
    musicas = []
    def __init__(self, nome, artista, duracao):
        self.nome = nome
        self.artista = artista
        self.duracao = duracao
        Musica.musicas.append(self)

    def __str__(self):
        return f'{self.nome} | {self.artista} | {self.duracao} segundos'
    
    def listar_musicas():
        for musica in Musica.musicas:
            print(f'{musica.nome} | {musica.artista} | {musica.duracao} segundos')

musica1 = Musica('Candy, Sugar, Pop', 'Astro', 170)
musica2 = Musica('Love So Fine', 'Cha Eun-Woo', 190)
musica3 = Musica('I Need the Light', 'Enyphen', 186)

Musica.listar_musicas()

class Livro:
    livros = []
    def __init__(self, titulo, autor, ano):
        self.titulo = titulo
        self.autor = autor
        self.ano_publicacao = ano
        self.disponibilidade = True
        Livro.livros.append(self)

    def __str__(self):
        return f'{self.titulo} | {self.autor} | {self.ano_publicacao} | {self.disponibilidade}'
    
    def listar_livros():
        for livro in Livro.livros:
            print(f'{livro.titulo} | {livro.autor} | {livro.ano_publicacao} | {livro.disponibilidade}')

    def emprestar_livro(self):
        self.disponibilidade = False


livro1 = Livro('Harry Potter e a Pedra Filosofal', 'J. K. Rowling', 1994)
livro2 = Livro('Cidade dos Ossos', 'Cassandra Clare', 2007)

livro2 = Livro.emprestar_livro()

Livro.listar_livros()