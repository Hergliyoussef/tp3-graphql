
# TP3 - API GraphQL de Gestion de Tâches

Ce projet est une API GraphQL réalisée avec **Node.js**, **Express** et **Apollo Server**, dans le cadre du TP3 du module *SoA et Microservices*.  
Il permet de gérer des tâches : ajout, modification, suppression, et affichage.

---

## 🚀 Fonctionnalités

- Ajouter une tâche
- Récupérer toutes les tâches
- Récupérer une tâche par ID
- Marquer une tâche comme terminée
- Modifier la description d'une tâche
- Supprimer une tâche
- Durée estimée de la tâche (`duration`)

---

## 📁 Structure du projet

```
tp3-graphql/
├── index.js             # Serveur principal
├── taskSchema.gql       # Schéma GraphQL
├── taskSchema.js        # Lecture et compilation du schéma
├── taskResolver.js      # Logique des résolveurs
└── README.md            # (ce fichier)
```

---

## 📦 Installation

```bash
git clone https://github.com/<votre-username>/tp3-graphql.git
cd tp3-graphql
npm install
```

---

## ▶️ Lancement du serveur

```bash
node index.js
```

Accéder ensuite à :  
👉 http://localhost:5000/graphql

---

## 🔍 Exemples de requêtes GraphQL

### ➕ Ajouter une tâche
```graphql
mutation {
  addTask(
    title: "TP GraphQL"
    description: "Terminer le TP3"
    completed: false
    duration: 2
  ) {
    id
    title
    duration
  }
}
```

### 📋 Récupérer toutes les tâches
```graphql
query {
  tasks {
    id
    title
    completed
    duration
  }
}
```

### ✅ Marquer comme terminée
```graphql
mutation {
  completeTask(id: "1") {
    id
    completed
  }
}
```

### ✏️ Modifier la description
```graphql
mutation {
  changeDescription(id: "1", description: "Nouvelle description") {
    id
    description
  }
}
```

### ❌ Supprimer une tâche
```graphql
mutation {
  deleteTask(id: "1")
}
```

---

## 🧑‍💻 Auteur

**Nom :** Wassim  
**Projet encadré par :** Dr. Salah Gontara  
**Année universitaire :** 2024 / 2025  
**Module :** SOA & Microservices

---

## 🐙 Dépôt GitHub

👉 [Lien à venir après publication]

