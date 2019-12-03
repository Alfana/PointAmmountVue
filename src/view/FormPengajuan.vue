<template>
    <v-container>
        <v-container>
            <v-card>
                <v-container>
                  <v-row >
                      <v-col 
                      cols="12"
                      md="4"
                      >
                      <v-text-field
                          label="Nama"
                          required
                      ></v-text-field>
                      <v-text-field
                          label="Nama"
                          required
                      ></v-text-field>
                      <v-text-field
                          label="Nama"
                          required
                      ></v-text-field>
                      <v-text-field
                          label="Nama"
                          required
                      ></v-text-field>
                      <v-text-field
                          label="Nama"
                          required
                      ></v-text-field>
                      </v-col>
                  </v-row>
                </v-container>
            </v-card>
        </v-container>
    </v-container>
</template>

<script>
import axios from 'axios';//eslint-disable-line
export default {
    
    data: () => ({
        series: [23, 11, 54],
        chartOptions: {
            colors: ['#F4473B', '#FFDF00', '#7EBD00'],
            labels: ["Tidak Minat", "Agak Minat", "Berminat"],
            dataLabels: {
                enabled: false,
                // style: {
                //     colors: ['#F44336', '#E91E63', '#9C27B0']
                // }
            },
            plotOptions: {
                pie: {
                    customScale: 1,
                    // size:100
                    donut: {
                        size: '45%',
                    }
                }
            },
            legend: {
                show: true,
                position: 'bottom',
            },
        }
    }),
}
</script>