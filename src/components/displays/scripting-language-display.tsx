export const ScriptingLanguageDisplay = (
  <>
    <p>
      A scripting language with interpreter in Java. This project was inspired
      by RuneScript, a language internally used on the game RuneScape.
    </p>

    <p className={"my-3"}>Features:</p>

    <ul className={"list-disc"}>
      <li>Variables: Glboal and local</li>
      <li>Functions: Global and local</li>
      <li>Basic arithmetic</li>
      <li>
        Runtime Variable Configuration: Global methods and global variables.
      </li>
      <li>Compilation to rudimentary bytecode.</li>
    </ul>

    <p className={"my-3 uppercase text-sm"}>Basic Syntax:</p>

    <code>
      <div>foo = 'bar'</div>
      <div># prints 'foo bar'</div>
      <div>println('foo: ' + foo)</div>
    </code>
  </>
);
