**Gem Search** is a dynamic game designed for laptops and computers. The gameplay is not optimized for smartphones, ensuring the best experience on larger screens.

### **Gameplay Overview**

- Players start the game by selecting either the **Easy** or **Hard** mode via the corresponding buttons.  
- Similar to the classic Frogger game, traffic moves across the screen while a gem randomly appears on the game board.  
- Players control the **frog** using the arrow keys, aiming to reach the gem and earn points.  
- The frog's movement is responsive and integrates with the game board's real-time updates.

### **How the Code Works**

1. **Initial Setup:**
   - The game initializes when the DOM loads, thanks to an anonymous function in a DOMContentLoaded event listener.
   - This setup process includes creating the **start buttons**, outlining the game board, and rendering the initial frog.

2. **Starting the Game:**
   - Clicking the **Easy** or **Hard** button triggers a game-start event listener.
   - This action calls a `handle` function, which:
     - Sets an interval to repeatedly call the `update` function.
     - The `update` function manages traffic movement and gem generation by invoking the update methods of relevant classes.

3. **Class Architecture:**
   - Key game elements (frog, gem, cars, and traffic) are represented as objects derived from well-defined classes:
     - **Frog, Gem, Car, Traffic** classes each feature methods like `create` and `update`.
     - Positions on the board are tracked using row and column attributes within these classes.
   - While most objects are instantiated as global variables, **Car** objects are instantiated within the **Traffic** class, reflecting their hierarchical relationship.

4. **Game Logic:**
   - The frog, gem, and traffic interact dynamically:
     - The frog moves toward the gem using arrow-key inputs, navigating the traffic hazards.
     - Traffic updates at intervals, creating a challenging environment.
