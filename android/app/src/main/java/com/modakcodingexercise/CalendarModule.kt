package com.modakcodingexercise;
import android.content.ContentValues
import android.content.DialogInterface
import android.net.Uri
import android.provider.CalendarContract
import android.util.Log
import android.widget.DatePicker
import android.widget.TimePicker
import androidx.appcompat.app.AppCompatActivity
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.UiThreadUtil.runOnUiThread
import java.util.Calendar


class CalendarModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private val tag = "CalendarModule"
    private val appCompatActivity: AppCompatActivity
        get() {
            val currentActivity = reactContext.currentActivity
            return currentActivity as AppCompatActivity?
                ?: throw Exception("Not an AppCompact Activity")
        }

    private var calendarDialog: CalendarDialogFragment? = null

    private fun hideDialog(){
        runOnUiThread {
            calendarDialog?.dismiss()
            calendarDialog = null
        }
    }

    private fun create(name: String, description: String){
        val datePicker = calendarDialog?.dialog?.findViewById<DatePicker>(R.id.date_picker)
        val timePicker = calendarDialog?.dialog?.findViewById<TimePicker>(R.id.time_picker)
        datePicker?.let {
            timePicker?.let {
                val startMillis: Long = Calendar.getInstance().run {
                    set(
                        datePicker.year,
                        datePicker.month,
                        datePicker.dayOfMonth,
                        timePicker.hour,
                        timePicker.minute
                    )
                    timeInMillis
                }
                val endMillis = startMillis + 1800000 // 30 Minutes
                Log.d(tag, "startMillis: $startMillis")
                Log.d(tag, "endMillis: $endMillis")
                val values = ContentValues().apply {
                    put(CalendarContract.Events.DTSTART, startMillis)
                    put(CalendarContract.Events.DTEND, endMillis)
                    put(CalendarContract.Events.TITLE, name)
                    put(CalendarContract.Events.DESCRIPTION, description)
                    put(CalendarContract.Events.CALENDAR_ID, 1)
                    put(CalendarContract.Events.EVENT_TIMEZONE, "America/Sao_Paulo")
                }
                val uri: Uri? =
                    reactContext.contentResolver.insert(CalendarContract.Events.CONTENT_URI, values)
                Log.d(tag, "EventCreated: $uri")
            }
        }

    }

    @ReactMethod
    fun createCalendarEvent(name: String, description: String) {
        runOnUiThread {
            appCompatActivity.layoutInflater.inflate(R.layout.calendar, null)

            val dialogFragment = CalendarDialogFragment.newInstance(
                { _, _ -> hideDialog() },
                { _, _ -> create(name, description) })

            calendarDialog = dialogFragment
            dialogFragment.showNow(appCompatActivity.supportFragmentManager, tag)
        }
    }

    override fun getName() = "CalendarModule"
}
