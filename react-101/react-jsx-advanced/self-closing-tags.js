/* When you write a self-closing tag in HTML, it is optional to include 
   a forward-slash immediately before the final angle-bracket.

   In JSX, you have to include the slash. 
   If you write a self-closing tag in JSX and forget the slash, you will raise an error.

*/
const profile = (
    <div>
      <h1>I AM JENKINS</h1>
      <img src="images/jenkins.png" />
      <article>
        I LIKE TO SIT
        <br />
        JENKINS IS MY NAME
        <br />
        THANKS HA LOT
      </article>
    </div>
  );