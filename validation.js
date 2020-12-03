// Esquemas de validación

// Operador $jsonSchema

// Empleo en creación de colecciones con validación

use clinica2

db.createCollection("pacientes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "apellidos", "direccion"],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "debe ser string y obligatorio"
                },
                apellidos: {
                    bsonType: "string",
                    description: "debe ser string y obligatorio"
                },
                edad: {
                    bsonType: ["number","null"],
                    minimum: 0,
                    maximum: 120,
                    description: "debe ser number"
                },
                fechaNacimiento: {
                    bsonType: "date"
                },
                direccion: {
                    bsonType: "object",
                    required: ["calle","localidad"],
                    properties: {
                        calle: {
                            bsonType: "string"
                        },
                        localidad: {
                            bsonType: "string"
                        },
                        provincia: {
                            bsonType: "string",
                            enum: ["Cáceres", "Madrid" ]
                        }
                    }
                }
            }
        }
    }
})

// Modificación de colecciones ya existentes (runCommand())
// validationLevel: moderate - En actualización los docs antiguos que no cumplan la nueva validación pueden seguir incumpliéndola

db.empleados.insert({nombre: "Pedro", apellidos: "Gómez"})
db.empleados.insert({nombre: 13})

db.runCommand({
    collMod: "empleados",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "apellidos"],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "debe ser string y obligatorio"
                },
                apellidos: {
                    bsonType: "string",
                    description: "debe ser string y obligatorio"
                },
                edad: {
                    bsonType: ["number","null"],
                    minimum: 0,
                    maximum: 120,
                    description: "debe ser number"
                }
            }
        }
    },
    validationLevel: "moderate"
})

// validationAction 

db.createCollection("stock", {
    validator: {
        $jsonSchema: {
        }
    },
    validationAction: "warn" // permite la escritura si no cumple la validación pero anota en el log una advertencia
})

