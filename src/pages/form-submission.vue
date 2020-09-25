<template>
  <div class="page-form-submission">
    <form @submit.prevent="submitForm">
      <p class="tw-mb-6">
        <router-link to="/">
          Back to HomePage
        </router-link>
      </p>
      <div>
        <label for="name">Name:</label><br />
        <input id="name" type="text" v-model="name" required />
      </div>
      <div>
        <label for="email">Email:</label><br />
        <input id="email" type="email" v-model="email" required />
      </div>
      <div>
        <label for="message">Message:</label><br />
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button
        :class="[name && email && message ? activeClass : '']"
        type="submit"
      >
        Submit
      </button>
      <div>
        <h3>Response from server:</h3>
        <pre>{{ response }}</pre>
      </div>
    </form>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";
import axios from "axios";
//#endregion

export default {
  name: "page-form-submission",
  setup() {
    //#region Reactive References
    const state = reactive({
      name: "",
      email: "",
      message: "",
      response: "",
      activeClass: "active",
    });
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
    //#endregion

    //#region Methods
    async function submitForm() {
      try {
        const response = await axios.post(
          "//jsonplaceholder.typicode.com/posts",
          {
            name: state.name,
            email: state.email,
            message: state.message,
          },
        );
        state.response = JSON.stringify(response, null, 2);
      } catch (error) {
        state.response = "Error: " + error.response.status;
      }
    }
    //#endregion

    return {
      ...toRefs(state),
      submitForm,
    };
  },
};
</script>

<style lang="scss" scoped>
$primary: #5968d7;

.page-form-submission {
  display: flex;
  justify-content: center;

  form {
    width: 300px;
    padding: 10px 40px;
    label {
      text-transform: uppercase;
      font-size: 13px;
      letter-spacing: 0.03em;
      font-weight: bold;
    }
    input,
    textarea {
      border: 1px solid #ccc;
      color: #333;
      width: calc(100% - 30px);
    }
    input,
    textarea,
    button {
      border-radius: 4px;
      padding: 8px 15px;
      font-weight: 300;
    }
    div {
      margin: 20px 0;
    }
  }

  button {
    color: white;
    border: none;
    width: 100%;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    background: #ccc;
    cursor: pointer;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
    transition: 0.25s all ease;
    &:hover {
      transform: translateY(2px);
    }
  }

  .active {
    background: $primary;
  }

  pre-content {
    width: 300px;
  }
}
</style>
