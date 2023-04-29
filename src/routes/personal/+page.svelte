<script>
    import KBase from './KBase.svelte';
    export let data;
</script>

<h1>Personal profile</h1>
<p>so. here we are</p>

<main>
<KBase data= data />
</main>

<aside>
    <h2>More Knowledges:</h2>
    <ul>
        {#each data.knowledges as { name }}
            <li>
                {name}
            </li>
        {/each}
    </ul>
</aside>