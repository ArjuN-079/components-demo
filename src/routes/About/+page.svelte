<script>
    import Header from "$lib/components/Header.svelte"
    import Footer from "$lib/components/Card.svelte"

    let firstName = $state();
    let lastName =  $state();
    let fullName = $derived(firstName + "" + lastName)

    firstName = "web";
    lastName = "two";
</script>

<Header/>
<h2>About us</h2>
<p>This is the about page</p>

{#if firstName && lastName}
  <p>Hi, {fullName}!</p>

{/if}
<p>First reactive: {firstName}</p>
<p>last reactive: {lastName}</p>  