<script>
    import Card from '$lib/components/Card.svelte';
    let people = [
        {
            fullName: "Phil Connors",
            favouriteSong:"I got you babe",
            petsName: "Punxsutawney Phil",
            image:"Phil", 
        },
        {
            
            fullName: "Peter Venkman",
            favouriteSong:"In the name of love",
            petsName: "Slimer",
            image:"peter", 
        },
        {
            
            fullName: "Steve Zissou",
            favouriteSong:"Rebel rebel",
            petsName: "jagur shark",
            image:"steve", 
        },
        {
            
            fullName: "Carl Spackler",
            favouriteSong:"I'm Alright",
            petsName: "Gopher",
            image:"", 
        }
    ]
</script>

<main>
{#each people as person}

    <Card bananas={person}/>
    {/each}
    <Card bananas={person}/>
    <Card />
</main>

<style>
    main {
        display: flex;
        flex-wrap: wrap;
    }
</style>