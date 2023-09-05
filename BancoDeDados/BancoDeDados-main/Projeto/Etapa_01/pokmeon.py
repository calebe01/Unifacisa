import requests
from bs4 import BeautifulSoup
import csv

# URL da página com a lista de Pokémon
url = "https://pokemondb.net/pokedex/all"

# Realiza a requisição para obter o conteúdo da página
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Encontra a tabela que contém os dados dos Pokémon
table = soup.find('table', {'id': 'pokedex'})

# Inicializa uma lista para armazenar os dados dos Pokémon
pokemon_data = []

# Itera sobre as linhas da tabela
for row in table.find_all('tr')[1:]:
    columns = row.find_all('td')
    name = columns[1].find('a', class_='ent-name').text
    type_tags = columns[2].find_all('a')
    types = [tag.text for tag in type_tags]
    abilities = columns[4].text.split(', ')
    weaknesses = columns[5].text.split(', ')
    strengths = columns[6].text.split(', ')
    
    pokemon_info = {
        'Nome': name,
        'Tipo': ', '.join(types),
        'Melhores Habilidades': ', '.join(abilities),
        'Fraquezas': ', '.join(weaknesses),
        'Vantagens': ', '.join(strengths)
    }
    pokemon_data.append(pokemon_info)

# Escreve os dados em um arquivo CSV
csv_filename = 'pokemon_data.csv'
with open(csv_filename, mode='w', newline='', encoding='utf-8') as csv_file:
    fieldnames = ['Nome', 'Tipo', 'Melhores Habilidades', 'Fraquezas', 'Vantagens']
    writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(pokemon_data)

print(f'Dados dos Pokémon foram extraídos e armazenados em {csv_filename}')
