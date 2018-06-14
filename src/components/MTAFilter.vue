 <template>
    <form class="form-inline">
        <div class="form-group">
        <input type="text" class="form-control" placeholder="Filter" v-model="filter" @input="updateValue">
        
        </div>
    </form>
</template>

<script>
import axios from "axios";

export default {
  name: 'MTAFilter',
  props: ['stations'],
  data () {
            return {
                filter: ""
            }
        },

    methods: {
      updateValue () {
        // Emit an 'input' event and pass along the updated filter value
        this.$emit('input', this.filter)
      }
    }
}
</script>