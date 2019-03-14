const twilioBlue = "#0D122B";
const twilioRed = "#F22F46";
const twilioCerulean = "#008CFF";
const white = "#ffffff";
const lightGray = "#e6e6e6";
const darkGray = "#666666";

export default {
  colors: {
    darkTextColor: "#e0e0e0",
  },
  MainHeader: {
    Container: {
      background: darkGray,
      color: white
    }
  },
  SideNav: {
    Container: {
      background: twilioBlue,
      color: darkGray
    },
    Button: {
      background: twilioBlue,
      color: lightGray,
      lightHover: true
    },
    Icon: {
      color: white
    }
  },
  AgentDesktopView: {
    Panel2: {
      background: twilioRed
    }
  }
}