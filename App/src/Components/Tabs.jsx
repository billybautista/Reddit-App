// import React from "react";
// import { View, Dimensions } from "react-native";
// import ScrollableTabView, {
//   ScrollableTabBar,
// } from "react-native-scrollable-tab-view";
// import NewScreen from "../Screens/NewScreen";
// import HotScreen from "../Screens/HotScreen";
// import TopScreen from "../Screens/TopScreen";
// import ControversialScreen from "../Screens/ControversialScreen";

// const { height } = Dimensions.get("window");

// export default () => {
//   return (
//     <View style={{ height: height }}>
//       <ScrollableTabView
//         initialPage={0}
//         tabBarUnderlineStyle={{ backgroundColor: "#FF5700" }}
//         tabBarActiveTextColor="black"
//         renderTabBar={() => <ScrollableTabBar />}
//       >
//         <View tabLabel="New">
//           <NewScreen />
//         </View>
//         <View tabLabel="Top">
//           <TopScreen />
//         </View>
//         <View tabLabel="Hot">
//           <HotScreen />
//         </View>
//         <View tabLabel="Popular">
//           <ControversialScreen />
//         </View>
//       </ScrollableTabView>
//     </View>
//   );
// };
