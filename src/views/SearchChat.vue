<template>
    <div class="container">
        <h1>Поиск чатов</h1>
        <div class="search-container">
            <div class="search-by-number search-by">
                <h2>Поиск по номеру договора</h2>
                <div class="search-by-container">
                    <h3>Номер договора</h3>
                    <input type="text" placeholder="Номер договора">
                </div>
                <button>Искать</button>
            </div>
            <div class="search-by-id search-by">
                <h2>Поиск по ID чата</h2>
                <div class="search-by-container">
                    <h3>ID чата</h3>
                    <input type="text" placeholder="ID чата">
                </div>
                <button>Искать</button>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss">
.container {
    h1 {
        margin-top: 20px;
        text-align: left;
        margin-left: 20px;
    }
    .search-container {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        .search-by {
            width: 48%;
            background: var(--color-element);
            border-radius: 10px;
            border-top: 4px solid #5f77ec;
            display: flex;
            flex-direction: column;
            text-align: left;
            padding: 10px;
            .search-by-container {
                margin-top: 40px;
                display: flex;
                justify-content: space-between;
                input {
                    width: 70%;
                    height: 20px;
                    padding-left: 5px;
                }
                input:focus {
                    outline: none;
                }
            }
            button {
                border: none;
                border-radius: 5px;
                margin-top: 20px;
                // padding: 5px 10px;
                width: 30%;
                height: 30px;
                margin-left: auto;
                margin-right: 0;
                transition: 0.5s;
                background: var(--color-hover-active);
            }
            button:hover {
                background-color: #00693E;
                transition: 0.5s;
            }
        }
    }
}
</style>