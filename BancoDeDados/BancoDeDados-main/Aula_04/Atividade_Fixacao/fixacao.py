import requests

requisicao = requests.get("https://pokeapi.co/api/v2/pokemon/ditto")
print (requisicao)

print (requisicao.json())


dir_requisicao = requisicao.json()
print(dir_requisicao['name'])
print(dir_requisicao['base_experience'])
print(dir_requisicao['abilities'])
print(dir_requisicao['game_indices'])




#dir_requisicao = requisicao.json()
