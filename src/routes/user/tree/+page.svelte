<script>
    import { onMount } from 'svelte';

    let directoryTree = [];

    onMount(async () => {
        const response = await fetch('/api/filesystem');
        if (response.ok) {
            directoryTree = await response.json();
        } else {
            console.error('Failed to fetch directory tree');
        }
    });
</script>

<!-- Render the directory tree -->
<ul>
    {#each directoryTree as node}
        <li>
            {node.name}
            {#if node.type === 'directory'}
                <ul>
                    {#each node.children as child}
                        <!-- Recursively render children -->
                    {/each}
                </ul>
            {/if}
        </li>
    {/each}
</ul>
