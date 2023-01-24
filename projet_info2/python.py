import json
with open('texte.json') as jsonfile:
   texte = json.load(jsonfile)
questions = (texte["questions"])
reponses = (texte["reponses"])
print(questions)
print(reponses)
