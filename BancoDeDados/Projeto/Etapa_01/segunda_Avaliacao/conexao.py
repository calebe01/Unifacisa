import pandas as pd
import pymongo

# Configurações de conexão com o MongoDB
mongo_uri = "mongodb://localhost:27017/"

client = pymongo.MongoClient(mongo_uri)

db = client["Nome do banco de dados"]