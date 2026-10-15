// Keep these lines for a best effort IntelliSense in the editor.
// When this file is migrated to TypeScript in the future this line must be removed.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.14.7.23/runtimes/native1.12-tchmi/TcHmi.d.ts" />

function colorSelector(par1) {
        if (!par1) return '#000000';
        
        // Normalize string to lowercase and trim whitespace
        const color = par1.toLowerCase().trim();
        
        // Lookup map matching your PLC string outputs
        const colorMap = {
            'red': '#FF0000',
            'blue': '#0000FF',        // RGB: rgb(0, 0, 255)
            'limegreen': '#32CD32',
            'darkorange': '#FF8C00',
            'black': '#000000',
            'teal': '#008080'
        };

        const resolvedColor = colorMap[color] || colorName; // Returns hex if matched, otherwise returns original input
        return {
            color: resolvedColor
        };  

}

TcHmi.Functions.registerFunctionEx(
  'colorSelector',
  'TcHmi.Functions.HmiProjectRgbFromPLC',
  colorSelector,
);
