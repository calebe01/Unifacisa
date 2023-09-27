import pandas as pd
from pymongo import MongoClient

# Configurações de conexão com o MongoDB
mongo_uri = "mongodb://localhost:27017/"
database_name = "Pokemon_data"
collection_name = "pokemon_info"

# Caminho para o arquivo CSV
csv_file_path = 'C:/Users/calee/Desktop/Unifacisa_Clone/Unifacisa/BancoDeDados/Projeto/Etapa_01/pokemon_data.csv'

# Carrega os dados do CSV em um DataFrame usando pandas
df = pd.read_csv(csv_file_path)

# Converte o DataFrame em uma lista de dicionários no formato esperado pelo MongoDB
data = df.to_dict('records')

# Conecta-se ao MongoDB usando pymongo
client = MongoClient(mongo_uri)
db = client[database_name]
collection = db[collection_name]

# Insere os dados no MongoDB
collection.insert_many(data)

print("Dados importados com sucesso para o MongoDB.")

