migrate((db) => {
  const collection = new Collection({
    "id": "btn22xte4x8bthn",
    "created": "2023-02-14 03:51:26.589Z",
    "updated": "2023-02-14 03:51:26.589Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kwtgfba8",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("btn22xte4x8bthn");

  return dao.deleteCollection(collection);
})
