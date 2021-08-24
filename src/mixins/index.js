import {
  reportLog
} from '@/utils';
const mixins = {
  computed: {
    storeKey() {
      return `${this.$route.query.channel}:packageSelected-${this.$route.query.uid}`;
    }
  },
  methods: {
    reportLog(event) {
      let params = {
        channel: this.$route.query.channel,
        uid: this.$route.query.uid,
        type: event
      }
      if (event > 1) {
        params.tid = this.$route.query.tid;
      }
      return reportLog(params);
    }
  }
}
export default mixins;
