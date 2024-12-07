import tkinter as tk
from win32gui import SetWindowLong, GetWindowLong, SetLayeredWindowAttributes
from win32con import GWL_EXSTYLE, WS_EX_LAYERED, LWA_COLORKEY
import win32api

def make_window_transparent(hwnd):
    # Hacer que la ventana sea transparente y clic-through
    ex_style = GetWindowLong(hwnd, GWL_EXSTYLE)
    SetWindowLong(hwnd, GWL_EXSTYLE, ex_style | WS_EX_LAYERED)
    SetLayeredWindowAttributes(hwnd, win32api.RGB(0, 0, 0), 0, LWA_COLORKEY)

root = tk.Tk()
root.geometry("1920x1080+20+20")
root.overrideredirect(True)  # Quitar bordes
root.wm_attributes("-topmost", True)  # Siempre al frente
root.wm_attributes("-transparentcolor", "black")  # Color transparente

canvas = tk.Canvas(root, bg="black", highlightthickness=0)
canvas.pack(fill="both", expand=True)

# Dibujar rectángulo
canvas.create_rectangle(0, 0, root.winfo_screenwidth() -25, root.winfo_screenheight() -50, fill="white", outline="")

# Aplicar transparencia y clic-through
hwnd = int(root.frame(), 16)  # Obtener handle de la ventana
make_window_transparent(hwnd)

root.mainloop()
