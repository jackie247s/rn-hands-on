const ScheduleData = {
  data: [
    {
      timing: "08:00 AM",
      subject:"CA-GR2(C,D)",
      classroom: "CR-4",
      teacher: "AHSAN"
    },
    {
      timing: "09:00 AM",
      subject:"TBW-D",
      classroom: "CR-10",
      teacher: "SAMEERA"
    },
    {
      timing: "11:00 AM",
      subject:"AI-D",
      classroom: "E1",
      teacher: "FARRUKH"
    },
    {
      timing: "12:00 PM",
      subject:"IRTM-GR1",
      classroom: "R12",
      teacher: "RAFI"
    },
    {
      timing: "01:00 PM",
      subject:"CC-GR1",
      classroom: "R11",
      teacher: "TAHIR"
    }
  ],
  getData: () => this.data
};

export default ScheduleData;
