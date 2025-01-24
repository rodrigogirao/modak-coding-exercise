package com.modakcodingexercise

import android.app.AlertDialog
import android.app.Dialog
import android.content.DialogInterface
import android.graphics.Color
import android.graphics.drawable.ColorDrawable
import android.os.Bundle
import android.view.View
import androidx.fragment.app.DialogFragment

class CalendarDialogFragment(
    private val cancel: DialogInterface.OnClickListener,
    private val create: DialogInterface.OnClickListener
) : DialogFragment() {

    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog =
        AlertDialog.Builder(requireContext())
            .setView(R.layout.calendar)
            .setNegativeButton("Cancel ", cancel)
            .setPositiveButton("Create ", create)
            .create()

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        requireDialog().window?.setBackgroundDrawable(ColorDrawable(Color.TRANSPARENT))
    }

    companion object {
        fun newInstance(
            cancel: DialogInterface.OnClickListener,
            create: DialogInterface.OnClickListener
        ): CalendarDialogFragment {
            return CalendarDialogFragment(cancel, create)
        }
    }




}