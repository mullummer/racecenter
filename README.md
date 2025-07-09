# Racecenter

Gives a better view of all riders in the peloton at Dauphine/TDF racecenter page/
For example
https://twitter.com/velofacts/status/1400448188637605895/photo/1

Run the script in app.js on the javascript console of your browser at
https://racecenter.letour.fr/en/

Information on where to find the script console here
https://webmasters.stackexchange.com/questions/8525/how-do-i-open-the-javascript-console-in-different-browsers

You can tweak the variables at the top of the script.

A gap larger than [min_gap] seconds creates a new group

Riders slower than [max_slow_speed] km/h will be marked black. It allows you to quickly identify the riders in a crash.

Riders with bib numbers in [gc] will be marked yellow (gc contenders).
Riders with bib numbers in [green] will be marked green (sprinters).
Start and end these lists also with a comma. For example: ",1,51,61,81,"

Click on a team jersey to switch to mark the team members. Click again to reset

It can be difficult to see if riders are on their spare bike and the data comes from the bike on the car.
Hairpin corners can also influence the gps data

Live data probably starts when tv coverage starts. 


# Update 2025

There is no individual data available.
There are dure the first ITT

app-2025.js uses the group data. I assume the group data is linked to the GPS of the motards.
So, it's less usefull but better than nothing
The segments don't work yet, I can make them work. But also not very useful when it's linked to a motard
