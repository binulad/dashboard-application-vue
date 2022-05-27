<template>
  <!-- Task Form Area -->
  <div class="card border-0 h-100 shadow">
    <!-- Form -->
    <Form
      class="d-flex flex-column h-100 overflow-hidden"
      v-slot="{ meta, errors }"
      :validation-schema="schema"
    >
      <div class="flex-grow-1 h-100 overflow-auto p-3">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <!-- Title -->
              <div class="col-lg-6 mb-3">
                <label for="title" class="form-label">Title</label>
                <Field
                  name="title"
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="Enter Title"
                  :class="{ 'is-invalid': errors.title }"
                  v-model="productDetails.title"
                />
                <ErrorMessage
                  name="title"
                  as="div"
                  class="invalid-feedback d-block"
                />
              </div>
              <!-- End: Title -->

              <!-- Price -->
              <div class="col-lg-6 mb-3">
                <label for="price" class="form-label">Price</label>
                <div class="input-group">
                  <span class="input-group-text">$</span>
                  <Field
                    name="price"
                    id="price"
                    type="text"
                    class="form-control"
                    placeholder="Enter Price"
                    :class="{ 'is-invalid': errors.price }"
                    v-model.number="productDetails.price"
                  />
                </div>
                <ErrorMessage
                  name="price"
                  as="div"
                  class="invalid-feedback d-block"
                />
              </div>
              <!-- End: Price -->

              <!-- Description -->
              <div class="col-lg-12 mb-3">
                <label for="description" class="form-label">Description</label>
                <Field
                  name="description"
                  id="description"
                  as="textarea"
                  class="form-control"
                  placeholder="Enter Description"
                  :class="{ 'is-invalid': errors.description }"
                  v-model="productDetails.description"
                />
                <ErrorMessage
                  name="description"
                  as="div"
                  class="invalid-feedback d-block"
                />
              </div>
              <!-- End: Description -->

              <!-- Category -->
              <div class="col-lg-6">
                <label for="category" class="form-label">Category</label>
                <Field
                  name="category"
                  id="category"
                  as="select"
                  class="form-select"
                  :class="{ 'is-invalid': errors.category }"
                  v-model="productDetails.category"
                >
                  <option value="" selected>Select Category</option>
                  <option
                    :value="category.name"
                    v-for="category in productCategory"
                    :key="category.value"
                  >
                    {{ category.name }}
                  </option>
                </Field>
                <ErrorMessage
                  name="category"
                  as="div"
                  class="invalid-feedback d-block"
                />
              </div>
              <!-- End: Category -->

              <!-- Product Image -->
              <div class="col-lg-6">
                <label for="image" class="form-label">Product Image</label>
                <input
                  id="image"
                  name="image"
                  type="file"
                  class="form-control"
                  ref="fileInput"
                  :class="{ 'is-invalid': invalidImage }"
                  @input="pickFile()"
                  @blur="blurHandler($event)"
                />
                <div class="invalid-feedback d-block" v-if="invalidImage">
                  This field is required
                </div>
              </div>
              <!-- End: Product Image -->
            </div>
          </div>

          <div class="col-lg-4">
            <div
              class="border h-100 imagePreview"
              @click="selectImage()"
              :style="{ 'background-image': `url(${previewImage})` }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Form Action -->
      <div
        class="flex-shrink-0 d-flex align-items-center justify-content-between border-top p-3"
      >
        <button
          type="button"
          title="Cancel"
          class="btn btn-outline-secondary"
          @click="onCancel()"
        >
          Cancel
        </button>
        <button
          type="button"
          title="Save"
          class="btn btn-primary"
          :disabled="!meta.valid || previewImage == null"
          @click="onSave(productDetails)"
        >
          Save
        </button>
      </div>
      <!-- End: Form Action -->
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ProductConstants } from "@/products/constants";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default defineComponent({
  name: ProductConstants.NAME.PRODUCTS_FORM_PRESENTATION,
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: ["productData"],
  emits: ["emitProductData", "cancelClick"],
  data() {
    const schema = yup.object({
      title: yup
        .string()
        .required(ProductConstants.VALIDATION_MESSAGE.REQUIRED),
      price: yup
        .number()
        .required(ProductConstants.VALIDATION_MESSAGE.REQUIRED),
      description: yup
        .string()
        .required(ProductConstants.VALIDATION_MESSAGE.REQUIRED),
      category: yup
        .string()
        .required(ProductConstants.VALIDATION_MESSAGE.REQUIRED),
    });
    return {
      productDetails: this.productData,
      schema,
      previewImage: null,
      fileInputRef: HTMLElement as any,
      image: "",
      productCategory: ProductConstants.PRODUCT_CATEGORY,
      initialRating: {
        rate: 0,
        count: 0,
      },
      invalidImage: false,
    };
  },
  mounted() {
    this.fileInputRef = this.$refs.fileInput;
  },
  methods: {
    // Image Preview method
    selectImage(): any {
      this.fileInputRef.click();
    },

    // Image Upload method
    pickFile() {
      let file: any = this.fileInputRef.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.previewImage = e.target.result;
          this.productDetails.image = e.target.result;
          this.invalidImage = false;
        };
        reader.readAsDataURL(file[0]);
      }
    },

    // MEthod called while Blur Input file
    blurHandler(event: any) {
      this.image = event.target.value;

      if (this.image == "") {
        this.invalidImage = true;
      } else {
        this.invalidImage = false;
      }
    },

    // Method called while click on Save button
    onSave(productDetails: any) {
      // productDetails.rating = this.initialRating;
      this.$emit("emitProductData", productDetails);
    },

    // Method called while click on Cancel button
    onCancel() {
      this.$emit("cancelClick");
    },
  },
});
</script>
