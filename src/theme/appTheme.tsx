import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    settingsContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        marginBottom: 20
    },
    button: {
        marginTop: 20
    },
    bigBtn: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigBtnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }, 
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    MenuContainer: {
        marginVertical: 20,
    },
    menuItem: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: 20,
    }, 
    menuBtn: {
        padding: 10,
        marginVertical: 10,
    }

})