# Description

This is a simple digital logbook. The user can create addresses and routes. With the help of a calendar, the routes can be stored on different days. The programme is based on React-Native-Windows and is intended as a UWP application. The addresses and routes are persisted using a sqlite database. 
Current status is "Work in Process".

## Current functions are:

- Creating and persisting addresses.
- Searching and filtering addresses by name, street, city or postcode.
- Create and persist routes.
- Search and filter routes by name, street, city or postcode from the start or destination address.
- Add daily routes.
- Add up routes and their distance by day and month.
- Selection of a time window in which all travelled routes and their distances are recorded and added up,  
  as well as output as a CSV file.

Translated with www.DeepL.com/Translator (free version)

## Bigger todos are:

- General refactoring
- Reworking the design
- Adding routes using OpenStreetMap 
- Synchronization of the database with a server
- Cross-platform functionality.

## Required programmes:

- Node
- Visual Studio or its BuildTolls

## Usage:

- Download the repository
- install the Node dependencies with "npm install"
- Start the programme with "npm run windows" from the root folder of the programme
- The version numbers of the VisualStudio version used and/or the UWP version may need to be adjusted.