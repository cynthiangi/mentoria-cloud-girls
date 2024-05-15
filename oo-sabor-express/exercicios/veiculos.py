from abc import ABC, abstractmethod

class Veiculo:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo
        
    def __str__(self):
        status = "ligado" if self._ligado else "desligado"
        return f'{self.marca} | {self.modelo} | Status: {self._ligado}'
    
    @abstractmethod
    def ligar(self):
        pass
