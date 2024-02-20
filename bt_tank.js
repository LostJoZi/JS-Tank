control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        OMG_Tank.Set_Speed(100, 100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_UP) {
        OMG_Tank.Set_Speed(0, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        OMG_Tank.Set_Speed(-100, -100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_UP) {
    	
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        OMG_Tank.Set_Speed(-100, 100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_UP) {
        OMG_Tank.Set_Speed(0, 0)
        OMG_Tank.Set_Speed(0, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        OMG_Tank.Set_Speed(100, -100)
    } else if (0 == EventBusValue.MES_DPAD_BUTTON_4_UP) {
        OMG_Tank.Set_Speed(0, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        //Zde zadejte vaši funkci
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP) {
        //Zde zadejte vaší funkci
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_UP) {
        //Zde zadejte vaši funkci
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_UP) {
        //Zde zadejte vaší funkci
    }
})
OMG_Tank.Tank_Init(Tank_version.V3)
OMG_Tank.Stop_Motors()
OMG_Tank.Set_Speed(0, 0)
