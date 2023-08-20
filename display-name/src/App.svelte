<script>
  let name = "World"

  function update(event){
    name = event.target.value;
  }

  function reset(){
    name = "World";
    // @ts-ignore
    document.getElementById("inputs").value = "";
  }
</script>

<main>
  <h1>Hello <span id="name">{name}</span>!</h1>
  <input id="inputs" placeholder="name" on:input={update}/>
  <button on:click={reset}>Reset</button>
</main>

<style>
  input{
    min-width: 15rem;
    min-height: 2rem;
  }

  span{
    color: orange;
    text-transform: capitalize;
    user-select: none;
    cursor: pointer;
    text-decoration: underline white;
    transition: text-decoration 0.6s ease-in-out;
  }

  span:hover{
    text-decoration: underline dodgerblue;
  }

  button{
    min-width: 5rem;
    min-height: 2rem;
  }

  button:hover{
    box-shadow: dodgerblue;
  }
</style>
