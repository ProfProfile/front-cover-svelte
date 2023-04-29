<script>
    export let data;
</script>


<div>
    <h3>{data.name}</h3>
    <ul>
        {#each data.consistOf as {sk_name}}
            <li>{sk_name}</li>
        {/each}
    </ul>
    <h1>Hello from Personal Profile</h1>
</div>