<template>
    <div class="task">
        <div class="task-description">
            <h2>Task 2</h2>
            Add styles to this page so that it looks like the following:

            <img src="../assets/task-2.png" alt="Task 2" style="max-width: 100%; margin-top: 20px;">

            <p>Apply styles to the content of #solution-2 div.</p>
        </div>
        <div id="solution-2">
            <div class="container">
                <div class="title">Title</div>
                <div class="grid">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>A</div>
                    <div>B</div>
                    <div>C</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.task {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.task-description {
  display: flex;
  flex-direction: column;
}

#solution-2 .container {
  padding: 1.5rem;
  background: #1b1b1d;
  box-shadow: 0 0 0 2px #101113;
}

#solution-2 .title {
  margin-bottom: 1.5rem;
  color: #b6b6b9;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  text-align: center;
}

#solution-2 .grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.6rem;
}

#solution-2 .grid > div {
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  border-radius: 0.55rem;
  background: linear-gradient(140deg, #ff9f0f 0%, #e52d7a 100%);
  color: #ffd2a6;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1;
}
</style>