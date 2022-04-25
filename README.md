# Quantiful-Test

This project was designed to create a basic framework to allow reuse of components, to easily build dashboards. Data in this project is fetched using the Pokemon API which classifies data into two types: lists or numbers. 

Run 'npm start' to run the application in development mode.

## Assumptions

After reviewing the brief, several assumptions were made.
- There can be an infinite number of columns defined for the dashboard and columns have a defined size.
- The size of the column was assumed from the wireframe, that is: a size of 1 signals the column's width is equal to a quarter of the screen's width; a size of 2 equals a half, a size of 3 equals three-quarters; and a size of 4 signals full-screen capability.
- Widgets for each column display one type of data. No two data-types can be displayed in a single column - though the framework has some capacity to do so, this results in poor styling.

## Other assets

The colour palette was inspired by renowned pokemon colours, and components were styled with reference to interfaces from popular pokemon games.
Fonts and pokemon sprites were sourced externally.
