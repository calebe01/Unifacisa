import csv

# Dados a serem persistidos
dados = [
    {"nome": "João", "idade": 25, "cidade": "São Paulo"},
    {"nome": "Maria", "idade": 30, "cidade": "Rio de Janeiro"},
    {"nome": "Carlos", "idade": 22, "cidade": "Belo Horizonte"}
]

# Nome do arquivo CSV
nome_arquivo = "dados.csv"

# Escrever os dados no arquivo CSV
with open(nome_arquivo, mode="w", newline="", encoding="utf-8") as arquivo_csv:
    campos = ["nome", "idade", "cidade"]
    escritor_csv = csv.DictWriter(arquivo_csv, fieldnames=campos)

    # Escrever o cabeçalho
    escritor_csv.writeheader()

    # Escrever os dados
    for linha in dados:
        escritor_csv.writerow(linha)

print("Dados persistidos com sucesso no arquivo CSV.")
