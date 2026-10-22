<!-- <script>
    import Picture from "./card-internals/Picture.svelte";
   // import Details from "./card-internals/Details.svelte";
    let {bananas} = $props();
</script>

<article class="card">
    <Picture image={bananas.image} />
    <Details apples={bananas} />
</article>

<style>
    .card {
        display: flex;
        align-items: center;
        gap: 2rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 1rem;
        max-width: 600px;
        margin: 1rem;
    }
</style> -->

<script> 
import profileDetails from "./profile-components/profileDetails.svelte";
import profilePic from "./profile-components/profilePic.svelte";
</script>

<article>
    <profilePic/>
    <profileDetails/>
</article>

<style>
    article{
        border: 1px solid grey;
    }
</style>