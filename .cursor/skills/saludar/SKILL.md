---
name: saludar
description: Cuando el usuario saluda con "hola" (o variantes: hola, hola!, buen día, buenas, hi, hello), responde con un saludo cálido seguido de una frase inspiracional célebre y su autor. Se activa únicamente cuando el mensaje del usuario es un saludo, no en cada respuesta.
---

# Skill: Saludo con frase inspiracional

## Propósito

Esta skill se activa **únicamente** cuando el usuario envía un mensaje que es un saludo (típicamente comenzando con "hola" o variantes). Ante un saludo, responde de forma cálida y añade una frase inspiracional célebre junto con su autor para dar una bienvenida memorable.

## Trigger (cuándo se activa)

**Activar SOLO si** el mensaje del usuario es principalmente un saludo. Detectar coincidencias como:

- `hola`
- `hola!`
- `hola, ¿cómo estás?`
- `buen día` / `buenos días`
- `buenas` / `buenas tardes` / `buenas noches`
- `hi` / `hello` / `hey`
- `qué tal`
- `saludos`

**NO activar** si el mensaje contiene una consulta técnica o tarea específica aunque contenga la palabra "hola". Ejemplos donde NO se activa:

- ❌ `"Hola, ¿podés revisar este código?"` → solo responder con la frase brevemente o no aplicar la skill, priorizar la tarea.
- ❌ `"Hola mundo" como ejemplo` → es código, no saludo.
- ✅ `"hola"` → activar skill completa.
- ✅ `"hola, buen día"` → activar skill completa.

**Regla de decisión**: si el saludo es **toda o la mayor parte** del mensaje → activar. Si es un saludo incidental antes de una pregunta → omitir o usar versión mínima.

## Comportamiento

Cuando se activa:

1. **Saludo cálido** que devuelva la cordialidad al usuario (ej. "¡Hola! ¿Cómo estás?", "¡Buenas! Encantado de ayudarte").

2. **Frase inspiracional** célebre con su autor:

```
> 💬 «[Frase inspiracional]»
> — [Autor]
> 
> _[Contexto opcional de una línea]_
```

3. **Variedad**: elegir una frase distinta en cada saludo. Evitar repetir la misma frase en saludos consecutivos.

4. **Después del saludo**, esperar la consulta del usuario (no asumir qué necesita).

## Formato de salida

```
¡Hola! [Saludo cálido de bienvenida]

> 💬 «[Frase inspiracional]»
> — [Autor]

¿En qué puedo ayudarte hoy?
```

## Banco de frases sugerido

El agente debe mantener un banco interno con al menos 20-30 frases variadas. Ejemplos:

- «El único modo de hacer un gran trabajo es amar lo que haces.» — Steve Jobs
- «La vida es lo que pasa mientras estás ocupado haciendo otros planes.» — John Lennon
- «Sé el cambio que quieres ver en el mundo.» — Mahatma Gandhi
- «La imaginación es más importante que el conocimiento.» — Albert Einstein
- «No cuentes los días, haz que los días cuenten.» — Muhammad Ali
- «El éxito es ir de fracaso en fracaso sin perder el entusiasmo.» — Winston Churchill
- «La mejor venganza es un enorme éxito.» — Frank Sinatra
- «Si puedes soñarlo, puedes hacerlo.» — Walt Disney
- «La educación es el arma más poderosa para cambiar el mundo.» — Nelson Mandela
- «No hay caminos hacia la paz, la paz es el camino.» — Mahatma Gandhi
- «El futuro pertenece a quienes creen en la belleza de sus sueños.» — Eleanor Roosevelt
- «Solo sé que no sé nada.» — Sócrates
- «Pienso, luego existo.» — René Descartes
- «Hay que tener cuidado al elegir los enemigos, porque uno termina pareciéndose a ellos.» — Jorge Luis Borges
- «Lo que no te desafía no te cambia.» — Fred DeVitis

## Restricciones

- No abusar del formato: el saludo debe ser breve y elegante.
- Si el usuario envía un saludo muy largo con mucha carga emocional o personal, ser empático y adaptar el tono.
- Mantener tono respetuoso y positivo.
- No activar la skill si el usuario ya hizo una pregunta específica (ir directo a la respuesta).
