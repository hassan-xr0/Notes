##  **Modes**

| Key   | Description               |
| ----- | ------------------------- |
| `Esc` | Normal Mode               |
| `i`   | Insert Mode               |
| `:`   | Command Mode              |
| `v`   | Visual Mode (select text) |

> 📝 **Tip:** Press `Ctrl + [` to exit insert mode (same as Esc).
## **Movement**

### **Basic**

| Keys      | Action                     |
| --------- | -------------------------- |
| `h j k l` | Move left, down, up, right |
| `w`       | Next word                  |
| `3w`      | Forward 3 words            |
| `3e`      | End of 3rd word            |
| `0`       | Start of line              |
| `__`      | First non-blank word       |
| `$`       | End of line                |

### **File Navigation**

|Keys|Action|
|---|---|
|`gg`|Top of file|
|`G`|Bottom of file|
|`%`|Jump to matching bracket|

### **Character Motion**

| Keys      | Action                          |
| --------- | ------------------------------- |
| `f{char}` | Jump **to** char (forward)      |
| `F{char}` | Jump **to** char (backward)     |
| `t{char}` | Jump **before** char (forward)  |
| `T{char}` | Jump **before** char (backward) |
##  **Delete**

| Keys  | Action                |
| ----- | --------------------- |
| `x`   | Delete character      |
| `dw`  | Delete word           |
| `d4w` | Delete 4 words        |
| `dd`  | Delete line           |
| `2dd` | Delete 2 lines        |
| `d$`  | Delete to end of line |
##  **Change (Delete + Insert)**

| Keys | Action                |
| ---- | --------------------- |
| `A`  | Insert at end of line |
| `r`  | Replace one character |
| `ce` | Change to end of word |
| `c$` | Change to end of line |
##  **Copy / Paste**

| Keys               | Action                                   |
| ------------------ | ---------------------------------------- |
| `y`                | Yank (copy)                              |
| `p`                | Paste (below)                            |
| `P`                | Paste (above)                            |
| `v` → select → `y` | Copy selection                           |
| `ggVG"+y`          | Copy entire file to **system clipboard** |

> 💡 **Tip:** Add this to Neovim so ALL copy works with system clipboard:  
> `set clipboard=unnamedplus`
##  **Search**

| Keys    | Action         |
| ------- | -------------- |
| `/word` | Search         |
| `n`     | Next match     |
| `N`     | Previous match |
##  **Undo / Redo**

| Keys     | Action           |
| -------- | ---------------- |
| `u`      | Undo             |
| `Ctrl+r` | Redo             |
| `U`      | Undo entire line |
##  **Save / Quit**

|Keys|Action|
|---|---|
|`:w`|Save|
|`:q!`|Quit without saving|
|`:wq`|Save and quit|

##  **Useful Visual Mode Tricks**

|Keys|Action|
|---|---|
|`V`|Linewise visual mode|
|`v`|Characterwise visual|
|`ggVG`|Select whole file|
## **Basic fold commands**

|Command|Action|
|---|---|
|`zc`|Close (collapse) the current fold|
|`zo`|Open (expand) the current fold|
|`za`|Toggle open/close|
|`zM`|Close _all_ folds|
|`zR`|Open _all_ folds|

##  **Extras You Should Know**

- `.` → repeat last command
    
- `u` → undo
    
- `Ctrl+d` → half-page down
    
- `Ctrl+u` → half-page up
    
- `%` → jump between `{ }`, `[ ]`, `( )`
    


