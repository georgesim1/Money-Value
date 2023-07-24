<template>
    <v-container>
      <v-container>
    <div class="api-doc">
      <h1>Documentation de l'API du service de conversion de devises MoneyValue</h1>
      <h2>URL de base</h2>
      <p>Toutes les demandes d'API sont faites à :</p>
      <code>https://yourdomain.com/api</code>
      <p>Remplacez yourdomain.com par votre vrai domaine.</p>
      <h2>Points d'accès</h2>
      
      
      <!-- Authentification -->
      <v-container>
        <div>
        <h3>Authentification</h3>
        <p>Récupère les credentiels</p>
        <code>email: example@example.com <br>
        password: admin
        </code>
        <h4>Réponse réussie</h4>
        <code>Une liste de toutes les devises.</code>
      </div>
      </v-container>

      <!-- GET /currencies -->
     <v-container>
      <div>
        <h3>GET /currencies</h3>
        <p>Récupère toutes les devises.</p>
        <h4>Exemple de requête</h4>
        <code>axiosInstance.get('/api/currencies');</code>
        <h4>Réponse réussie</h4>
        <code>Une liste de toutes les devises.</code>
      </div>
     </v-container>
  
      <!-- GET /currencies/:currencyId -->
     <v-container>
      <div>
        <h3>GET /currencies/:currencyId</h3>
        <p>Récupère une devise spécifique par son ID.</p>
        <h4>Exemple de requête</h4>
        <code>axiosInstance.get('/api/currencies/1');</code>
        <h4>Réponse réussie</h4>
        <code>Les détails de la devise avec l'ID fourni.</code>
      </div>
     </v-container>
  
      <!-- GET /pairs -->
      <v-container>
        <div>
        <h3>GET /pairs</h3>
        <p>Récupère toutes les paires de devises.</p>
        <h4>Exemple de requête</h4>
        <code>axiosInstance.get('/api/pairs');</code>
        <h4>Réponse réussie</h4>
        <code>Une liste de toutes les paires de devises.</code>
      </div>
      </v-container>
  
      <!-- GET /pairs/:currencyId -->
      <v-container>
        <div>
        <h3>GET /pairs/:currencyId</h3>
        <p>Récupère toutes les paires liées à une devise spécifique par son ID.</p>
        <h4>Exemple de requête</h4>
        <code>axiosInstance.get('/api/pairs/1');</code>
        <h4>Réponse réussie</h4>
        <code>Une liste de toutes les paires où la devise donnée est impliquée.</code>
      </div>
      </v-container>
  
      <!-- PUT /currencies/:currencyId -->
      <v-container>
        <div>
        <h3>PUT /currencies/:currencyId</h3>
        <p>Mette à jour une devise spécifique par son ID. Nécessite les données de la devise mise à jour dans le corps de la requête.</p>
        <h4>Exemple de requête</h4>
        <code>axiosInstance.put('/api/currencies/1', { name: 'Euro', code: 'EUR' });</code>
        <h4>Réponse réussie</h4>
        <code>Les détails de la devise mise à jour.</code>
      </div>
      </v-container>
  
      <!-- DELETE /currencies/:currencyId -->
     <v-container>
      <div>
        <h3>DELETE /currencies/:currencyId</h3>
        <p>Supprime une devise spécifique par son ID.</p>
        <h4>Exemple de requête</h4>
        <code>axiosInstance.delete('/api/currencies/1');</code>
        <h4>Réponse réussie</h4>
        <code>Confirmation de la devise supprimée.</code>
      </div>
     </v-container>
    </div>
  </v-container>
  </v-container>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .api-doc {
    font-family: Arial, sans-serif;
  }
  
  code {
    display: block;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: #f9f9f9;
    margin: 10px 0;
  }
  
  h2, h3 {
    color: #333;
  }
  
  h4 {
    color: #666;
  }
  </style>